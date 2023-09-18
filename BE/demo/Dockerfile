FROM openjdk:11
COPY ./build/libs/demo-0.0.1-SNAPSHOT.jar /app/demo.jar
WORKDIR /app
ENTRYPOINT ["java","-jar","demo.jar"]