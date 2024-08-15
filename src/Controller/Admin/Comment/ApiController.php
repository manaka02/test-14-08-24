<?php

namespace App\Controller\Admin\Comment;

use App\Repository\CommentRepository;
use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/admin/api/comment')]
class ApiController extends AbstractController
{
    public function __construct(
        private readonly CommentRepository $repository,
        private readonly SerializerInterface $serializer)
    {}

    // get all comments
    #[Route('/', name: 'app_admin_comment_json')]
    public function comments(): JsonResponse
    {
        $data = [
            'total' => $this->repository->count([]),
            'data' => $this->repository->findBy([], ['id' => 'DESC'], 5)
        ];
        $responseJson = $this->serializer->serialize($data, 'json', ['groups' => 'comment:read']);

        return new JsonResponse($responseJson, 200, [], true);
    }
}
