<?php

namespace App\Controller\Admin\Photo;

use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/photo/json')]
class JsonController  extends AbstractController
{
    public function __construct(private readonly ApiServices $apiServices)
    {}

    // get all photos
    #[Route('/list', name: 'app_admin_photo_json')]
    public function photos(): JsonResponse
    {
        $photos = $this->apiServices->get();
        return $this->json($photos);
    }
}