<?php

namespace App\Service;

use App\Entity\Todo;
use Doctrine\Persistence\ManagerRegistry;

readonly class TodoServices
{
    public function __construct(
        private ManagerRegistry $managerRegistry
    )
    {
    }

    /**
     * @throws \Exception
     */
    public function createTodo(?array $data): Todo
    {
        if (!isset($data['content'])) {
            throw new \Exception("content is required");
        }

        $todo = new Todo();

        $todo->setContent($data['content']);

        $this->managerRegistry->getManager()->persist($todo);
        $this->managerRegistry->getManager()->flush();
        return $todo;
    }

}