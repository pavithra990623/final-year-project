from PIL import Image
import pytesseract
import cv2
import numpy as np
import os

# Update the path below to where Tesseract is installed on your system
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Directory containing images
image_dir = r"D:\year3\A-individual project\AAmodel"

# Loop through all images in the directory
for filename in os.listdir(image_dir):
    if filename.endswith(".jpg"):  # Add or modify if you have different formats
        image_path = os.path.join(image_dir, filename)
        image = Image.open(image_path)

        # Convert PIL Image to a format OpenCV can work with
        image_cv = np.array(image)
        

        # Preprocess the image
        # Convert to grayscale
        gray = cv2.cvtColor(image_cv, cv2.COLOR_BGR2GRAY)

        # Apply thresholding
        _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

        # Convert back to PIL Image to use with pytesseract
        image_for_ocr = Image.fromarray(thresh)

        # Use Tesseract to do OCR on the preprocessed image
        text = pytesseract.image_to_string(image_for_ocr)

        print(f"OCR result for {filename}:\n{text}\n")
        print("------------------------------------------------------\n")
