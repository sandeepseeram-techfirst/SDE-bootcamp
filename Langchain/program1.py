API_KEY ="..."

from langchain.llms import OpenAI

llm = OpenAI(model_name="text-ada-001", openai_api_key=API_KEY)

print(llm("Tell me a joke about data scientist")) 