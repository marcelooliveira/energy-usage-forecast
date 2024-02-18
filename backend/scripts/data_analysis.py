import pandas as pd

energy_data = pd.read_csv('EnergyUsage.csv')
summary_stats = energy_data.describe()

from langchain import LangchainAgent

# Initialize Langchain agent
agent = LangchainAgent()

# Connect to LLama2
agent.connect_to_llama2()

# Send data to LLama2
agent.send_data_to_llama2(summary_stats)

# Optionally, receive any processed data from LLama2
processed_data = agent.receive_data_from_llama2()

# Close connection
agent.close_connection()
