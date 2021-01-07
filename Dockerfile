FROM adoptopenjdk/openjdk11:alpine-jre
ADD target/demo-backend-0.0.1-SNAPSHOT.jar /app/demo-backend.jar
CMD ["java","-jar","/app/demo-backend.jar"]