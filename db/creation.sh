
echo "Inserting.. Collections"
mongoimport --db mean --collection membres --drop --file membres.json --jsonArray 
mongoimport --db mean --collection biens --drop --file biens.json --jsonArray 
mongoimport --db mean --collection services --drop --file services.json --jsonArray 
mongoimport --db mean --collection utilisations --drop --file utilisations.json --jsonArray
mongoimport --db mean --collection disponibilites --drop --file disponibilites.json --jsonArray
mongoimport --db mean --collection descriptifBiens --drop --file descriptifBiens.json --jsonArray
mongoimport --db mean --collection descriptifServices --drop --file descriptifServices.json --jsonArray