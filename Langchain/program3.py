USER_INPUT = 'Paris'

from langchain.llms import OpenAI

from langchain import PromptTemplate

llm = OpenAI(model_name="text-davinci-003", openai_api_key=API_KEY)

template = """ I am travelling to {location}. What are the top 3 things I can do while I am there. Be very specific and respond as three bullet points """

prompt = PromptTemplate(

input_variables=["location"],

template=template,

)

final_prompt = prompt.format(location=USER_INPUT ) 

print(f"LLM Output: {llm(final_prompt)}")