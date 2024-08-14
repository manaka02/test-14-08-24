<?php

namespace App\Controller\Admin\Config;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ConfigController extends AbstractController
{
    #[Route('/admin/config', name: 'app_admin_config')]
    public function index(): Response
    {
        return $this->render('admin/config/index.html.twig', [
            'controller_name' => 'ConfigController',
        ]);
    }
}
