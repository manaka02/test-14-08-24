<?php

namespace App\Controller\Admin\Post;

use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/admin/api/post')]
class ApiController extends AbstractController
{

    public function __construct(
        private readonly PostRepository $repository,
        private readonly SerializerInterface $serializer)
    {}

    #[Route('/', name: 'app_admin_post_api')]
    public function index(): JsonResponse
    {
        $data = [
            'total' => $this->repository->count([]),
            'data' => $this->repository->findBy([], ['id' => 'DESC'], 5)
        ];
        $responseJson = $this->serializer->serialize($data, 'json', ['groups' => 'post:read']);

        return new JsonResponse($responseJson, 200, [], true);
    }
}
