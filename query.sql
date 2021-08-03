use PETS_db;

SELECT owner.userName,owner.email,owner.petName,friend.animalType,friend.animalBreed,friend.animalSize,friend.animalTemperament,friend.activityLevel,friend.playsWithOthers,owner.preferredPark
FROM owner
JOIN friend ON owner.petName = friend.petName; 