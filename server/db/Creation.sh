
echo "Inserting.. Membres"
mongoimport --db dbsite --collection Membres --drop --file Membres.json --jsonArray 
mongoimport --db dbsite --collection Biens --drop --file Biens.json --jsonArray 
mongoimport --db dbsite --collection Services --drop --file Services.json --jsonArray 
mongoimport --db dbsite --collection Utilisations --drop --file Utilisations.json --jsonArray
mongoimport --db dbsite --collection Disponibilites --drop --file Disponibilites.json --jsonArray
mongoimport --db dbsite --collection DescriptifBiens --drop --file DescriptifBiens.json --jsonArray
mongoimport --db dbsite --collection DescriptifServices --drop --file DescriptifServices.json --jsonArray