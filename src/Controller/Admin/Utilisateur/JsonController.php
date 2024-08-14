<?php

namespace App\Controller\Admin\Utilisateur;

use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/utilisateur/json')]
class JsonController  extends AbstractController
{
    public function __construct(private readonly ApiServices $apiServices)
    {}

    // get Users
    #[Route('/list', name: 'app_admin_utilisateur_json')]
    public function users(): JsonResponse
    {
        $users = $this->apiServices->getUsers();
        return $this->json($users);
    }

}