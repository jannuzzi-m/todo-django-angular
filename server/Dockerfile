FROM python:3.9

RUN mkdir /server

WORKDIR /server
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . /server/
EXPOSE 8000
