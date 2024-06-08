from langchain.llms import OpenAI

from langchain.chains import LLMChain, SimpleSequentialChain

from langchain import PromptTemplate

llm = OpenAI(model_name="text-davinci-003", openai_api_key=API_KEY)

# first step in chain

template = "What is the most popular city in {country} for tourists? Just return the name of the city"

first_prompt = PromptTemplate(

input_variables=["country"],

template=template)

chain_one = LLMChain(llm = llm, prompt = first_prompt)

# second step in chain 

second_prompt = PromptTemplate(

input_variables=["city"],

template="What are the top three things to do in this: {city} for tourists. Just return the answer as three bullet points.",)

chain_two = LLMChain(llm=llm, prompt=second_prompt)

# Combine the first and the second chain

overall_chain = SimpleSequentialChain(chains=[chain_one, chain_two], verbose=True)

final_answer = overall_chain.run("Canada")