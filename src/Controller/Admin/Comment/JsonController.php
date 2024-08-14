<?php

namespace App\Controller\Admin\Comment;

use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/json/comment')]
class JsonController extends AbstractController
{
    public function __construct(private readonly ApiServices $apiServices)
    {}

    // get all comments
    #[Route('/', name: 'app_admin_comment_json')]
    public function comments(): JsonResponse
    {
        $comments = $this->apiServices->getComments();
        return $this->json($comments);
    }
}
