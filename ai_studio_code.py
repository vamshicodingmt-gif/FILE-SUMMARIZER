import streamlit as st
import base64
import requests
import google.generativeai as genai

# --- CONFIGURATION ---
# Using the PaliGemma API key you provided
PALIGEMMA_API_KEY = "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"

st.set_page_config(page_title="Smart File Summarizer", page_icon="⚡", layout="centered")

# --- UI HEADER ---
st.title("⚡ Smart File & Image Summarizer")
st.write("Upload a text document or an image. The AI will detect the file type and route it to the right model (Gemini for text, PaliGemma for images) to generate a summary.")

# --- SIDEBAR FOR GEMINI KEY ---
with st.sidebar:
    st.header("🔑 API Setup")
    gemini_key = st.text_input("Enter your Gemini API Key:", type="password")
    st.markdown("*Don't have one? Get it [here for free](https://aistudio.google.com/app/apikey).*")
    st.info("The PaliGemma (NVIDIA NIM) API key is already configured internally.")

# --- FILE UPLOADER ---
uploaded_file = st.file_uploader("Upload a file to summarize", type=["txt", "md", "csv", "png", "jpg", "jpeg"])

if uploaded_file is not None:
    file_type = uploaded_file.type

    # ==========================================
    # 1. IMAGE HANDLING (PaliGemma)
    # ==========================================
    if "image" in file_type:
        st.image(uploaded_file, caption="Uploaded Image", use_column_width=True)
        
        if st.button("🖼️ Summarize Image", use_container_width=True):
            with st.spinner("Analyzing image with PaliGemma (Vision AI)..."):
                # Convert Streamlit file to Base64
                encoded_image = base64.b64encode(uploaded_file.getvalue()).decode("utf-8")
                
                # Call NVIDIA NIM API
                headers = {
                    "Authorization": f"Bearer {PALIGEMMA_API_KEY}",
                    "Accept": "application/json"
                }
                payload = {
                    "model": "google/paligemma",
                    "messages": [{
                        "role": "user",
                        "content": [
                            {"type": "text", "text": "Provide a detailed caption and summary of what is happening in this image."},
                            {"type": "image_url", "image_url": {"url": f"data:{file_type};base64,{encoded_image}"}}
                        ]
                    }],
                    "max_tokens": 256
                }
                
                response = requests.post("https://integrate.api.nvidia.com/v1/chat/completions", headers=headers, json=payload)
                
                if response.status_code == 200:
                    st.success("Summary Generated!")
                    summary_text = response.json()['choices'][0]['message']['content']
                    st.info(summary_text)
                else:
                    st.error(f"API Error {response.status_code}: {response.text}")

    # ==========================================
    # 2. TEXT HANDLING (Gemini)
    # ==========================================
    elif "text" in file_type or file_type == "text/csv":
        # Read text
        text_content = uploaded_file.getvalue().decode("utf-8")
        
        # Show a preview of the text
        with st.expander("👀 View original text preview"):
            st.text(text_content[:1000] + ("\n...[truncated]" if len(text_content) > 1000 else ""))
            
        if st.button("📝 Summarize Text", use_container_width=True):
            if not gemini_key:
                st.error("⚠️ Please enter your Gemini API Key in the sidebar first!")
            else:
                with st.spinner("Summarizing text with Gemini 1.5 Flash..."):
                    try:
                        genai.configure(api_key=gemini_key)
                        model = genai.GenerativeModel('gemini-1.5-flash')
                        prompt = f"Please provide a concise but comprehensive summary of the following text. Use bullet points if necessary:\n\n{text_content}"
                        
                        response = model.generate_content(prompt)
                        
                        st.success("Summary Generated!")
                        st.markdown(response.text)
                    except Exception as e:
                        st.error(f"An error occurred: {e}")