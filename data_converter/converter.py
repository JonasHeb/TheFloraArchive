import csv

def csv_to_js_variables(csv_path, js_var_name="data_unfiltered"):
    """
    Converts a CSV file to a JS variable assignment string.
    Each row becomes a JS object in an array assigned to js_var_name.
    """
    with open(csv_path, newline='', encoding='latin-1') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        rows = list(reader)

    # Convert each row to a JS object string
    js_objects = []
    for row in rows:
        js_obj = []
        for key, value in row.items():
            # Try to convert to int or float, else keep as string
            try:
                val = int(value)
            except ValueError:
                try:
                    val = float(value)
                except ValueError:
                    safe_value = value.replace('"', '\\"')
                    val = f'"{safe_value}"'
            js_obj.append(f'{key}: {val}')
        js_objects.append('{' + ', '.join(js_obj) + '}')

    js_array = '[\n  ' + ',\n  '.join(js_objects) + '\n]'
    js_code = f'const {js_var_name} = {js_array};\n'
    return js_code

if __name__ == "__main__":
    csv_path = "FloraArchive_Tabelle_Vollständig.csv"
    js_path = "data.js"
    js_code = csv_to_js_variables(csv_path)
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_code)