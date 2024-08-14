<?php

namespace App\Controller\Admin\Utilisateur;

use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/utilisateur')]
class UtilisateurController extends AbstractController
{

    #[Route('/admin/utilisateur', name: 'app_admin_utilisateur')]
    public function index(): Response
    {
        return $this->render('admin/utilisateur/index.html.twig', [
            'controller_name' => 'UtilisateurController',
        ]);
    }



}
