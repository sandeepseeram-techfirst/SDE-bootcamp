API_KEY ="..."

from langchain import HuggingFaceHub 

llm = HuggingFaceHub(repo_id = "google/flan-t5-xl", huggingfacehub_api_token = API_KEY)

print(llm("Tell me a joke about data scientist"))