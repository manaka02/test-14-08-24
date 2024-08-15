<?php

namespace App\Service;

use App\Entity\Utilisateur;
use App\Repository\UtilisateurRepository;
use Doctrine\Persistence\ManagerRegistry;

class UtilisateurServices
{

    public function __construct(
        private readonly ManagerRegistry $managerRegistry,
        private readonly UtilisateurRepository $utilisateurRepository
    )
    {
    }


    public function createUser(?array $data): Utilisateur
    {
        if (!isset($data['name']) || !isset($data['email'])) {
            throw new \Exception("name and email are required");
        }

        $user = new Utilisateur();

        $user->setName($data['name'])
            ->setEmail($data['email']);

        $this->managerRegistry->getManager()->persist($user);
        $this->managerRegistry->getManager()->flush();

        return $user;
    }


    public function updateUser(Utilisateur $utilisateur, ?array $data): Utilisateur
    {
        if (!isset($data['name']) || !isset($data['email'])) {
            throw new \Exception("name and email are required");
        }

        $utilisateur->setName($data['name'])
            ->setEmail($data['email']);

        $this->managerRegistry->getManager()->flush();

        return $utilisateur;
    }

    public function deleteUser(Utilisateur $utilisateur): void
    {
        $this->managerRegistry->getManager()->remove($utilisateur);
        $this->managerRegistry->getManager()->flush();

    }


}