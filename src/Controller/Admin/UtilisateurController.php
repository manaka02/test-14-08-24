<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
