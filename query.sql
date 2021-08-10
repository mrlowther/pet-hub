use pets_db;

SELECT owners.userName,owners.email,owners.petName,friend.animalType,friend.animalBreed,friend.animalSize,friend.animalTemperament,friend.activityLevel,friend.playsWithOthers,owners.preferredPark
FROM owners
JOIN friend ON owners.petName = friend.petName; 