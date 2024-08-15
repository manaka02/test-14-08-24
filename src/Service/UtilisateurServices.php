<?php

namespace App\Service;

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

    // users
    public function getUsers()
    {
        return $this->utilisateurRepository->findBy([], ['id' => 'DESC'], 10);
    }

    public function addUser($data)
    {
        // add user
    }

    public function updateUser($data)
    {
        // update user
    }

}