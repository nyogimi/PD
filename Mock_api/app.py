from flask import Flask, request, jsonify
from time import sleep
from flask_cors import CORS
from langchain import PromptTemplate, HuggingFaceHub, LLMChain
from langchain.vectorstores import Pinecone
import pinecone
from langchain.prompts import PromptTemplate
from langchain.llms import CTransformers
from langchain.chains import RetrievalQA
from langchain.memory.buffer import ConversationBufferMemory
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

@app.route("/tempdata", methods=["GET"])
def get_temp():
    sleep(2)
    mock_result = {
        "tempAvg": 37
    }

    return jsonify(mock_result)

@app.route("/chat", methods=["POST"])
def get_chat():
    data = request.json.get("msg")

    dummy_response = {
        "response": "UTI is a ...."
    }

    return jsonify(dummy_response)

if __name__ == "__main__":
    app.run()