cd ../src/server/media/
chmod +755 ./gradlew
sudo ./gradlew build -x test
rm -rf ./build/libs/media-0.0.1-SNAPSHOT-plain.jar
java -jar ./build/libs/media-0.0.1-SNAPSHOT.jar
