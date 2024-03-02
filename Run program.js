import pandas as pd

def transform_data(input_file):
    # Read data
    data = pd.read_csv(input_file)
    
    # Transformation steps
    # Example: Convert column to uppercase
    data['column_name'] = data['column_name'].str.upper()
    
    # Save transformed data
    data.to_csv("transformed_data.csv", index=False)

if __name__ == "__main__":
    input_file = "input_data.csv"
    transform_data(input_file)
