
echo "Inserting.. Collections"
mongoimport --db mean --collection Membres --drop --file Membres.json --jsonArray 
mongoimport --db mean --collection Biens --drop --file Biens.json --jsonArray 
mongoimport --db mean --collection Services --drop --file Services.json --jsonArray 
mongoimport --db mean --collection Utilisations --drop --file Utilisations.json --jsonArray
mongoimport --db mean --collection Disponibilites --drop --file Disponibilites.json --jsonArray
mongoimport --db mean --collection DescriptifBiens --drop --file DescriptifBiens.json --jsonArray
mongoimport --db mean --collection DescriptifServices --drop --file DescriptifServices.json --jsonArray