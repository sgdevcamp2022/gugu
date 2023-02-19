brew install openjdk@17
cd ~/.zshrc
export JAVA_HOME=/opt/homebrew/Cellar/openjdk@17/17.0.3/libexec/openjdk.jdk/Contents/Home
export PATH=${PATH}:$JAVA_HOME/bin
