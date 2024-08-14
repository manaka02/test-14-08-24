<?php

namespace App\Controller\Admin\Photo;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PhotoController extends AbstractController
{
    #[Route('/admin/photo', name: 'app_admin_photo')]
    public function index(): Response
    {
        return $this->render('admin/photo/index.html.twig', [
            'controller_name' => 'PhotoController',
        ]);
    }
}
