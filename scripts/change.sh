@!/bin/sh

cd jres/$1
FILES=$(ls)
for FILE in $FILES 
do
   NAME=$(echo $FILE | cut -f1 -d".")
   EXT=$(echo $FILE | cut -f2 -d".")
   echo $NAME $EXT
   mv $NAME.$EXT $NAME.$2
done

cd ../..
