from flask import Flask, request, jsonify
import os
from simple_ocr import analyzeImage

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the POST request has the file part
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file:
        filename = file.filename
        file_path = os.path.join('uploads', filename)
        file.save(file_path)

        # Now call the function to analyze the image
        imageData = analyzeImage(filename)

        if len(imageData) > 0:
            return jsonify({"message": "File uploaded successfully", "data": imageData}), 200
        else:
            return jsonify({"message": "No data"}), 400
        

if __name__ == '__main__':
    app.run(debug=True)
