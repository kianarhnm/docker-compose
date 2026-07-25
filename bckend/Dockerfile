FROM python:3.12-slim
WORKDIR /app
run apt update && apt install -y curl
COPY requirements.txt .
RUN pip install -r requirements.txt 
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
