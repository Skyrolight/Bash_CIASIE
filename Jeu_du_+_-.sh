FILE_HISTORY=history.txt
FILE_HIGHSCORE=highscore.txt
source <(grep = config.ini)

if [ ! -f "$FILE_HISTORY" ]; then
    touch history.txt
fi
if [ ! -f "$FILE_HIGHSCORE" ]; then
    touch highscore.txt
    echo 999 > highscore.txt
    highscore=$(<highscore.txt)
else
    highscore=$(<highscore.txt)
    echo le high scores est de : $highscore
fi

RandomValue=$((( $RANDOM % 99) + 1 ))
tentative=0 
win=false
name=""
scoreMax=$(wc -l < highscore.txt)

while [ $win = false ]; do
    UserValue=0
    if [[ "$tentative" -eq "$coup_max" ]]
    then
        echo Nombre de coup atteins !
        if [ $scoreMax -lt $score_max ];
        then
            while (( $caractere_max > $(wc -c <<< $name)-1 )); do
                echo Entrer votre nom :
                read name
            done
            echo $tentative $name >> history.txt

            sortHistory="$(sort -n history.txt)"
            > history.txt
            echo  "$sortHistory" >> history.txt
            exit 0
        fi
    fi

    while [ $UserValue -lt 1 -o $UserValue -gt 99 ]; do
        echo Entrez une UserValue entre 1 et 99: 
        read UserValue
    done

    if [ $UserValue -eq $RandomValue ]
    then
        win=true
    else
        if [ $RandomValue -lt $UserValue ]
        then
            echo $UserValue Plus petit
        else
            echo $UserValue Plus grand
        fi
    fi

    tentative=$((tentative+1))
done

if [ $tentative -lt $highscore ]; then
    echo $tentative > highscore.txt
fi

echo Bravo!
echo Vous avez trouvé le nombre en: $tentative
if [ $scoreMax -lt $score_max ];
then
    while (( $caractere_max > $(wc -c <<< $name)-1 )); do
        echo Entrer votre nom :
        read name
    done
    echo $tentative $name >> history.txt

    sortHistory="$(sort -n history.txt)"
    > history.txt
    echo  "$sortHistory" >> history.txt
fi
