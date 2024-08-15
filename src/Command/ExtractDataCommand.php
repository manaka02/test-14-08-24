<?php

namespace App\Command;

use App\Service\ApiServices;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:extract-data',
    description: 'Add a short description for your command',
)]
class ExtractDataCommand extends Command
{
    public function __construct(
        private readonly ApiServices $apiServices
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {

    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        try {
            $this->apiServices->beginExtraction();

            $io->success('Data extraction completed successfully.');
        }catch (\Exception $e){
            $io->error($e->getMessage());
        }

        return Command::SUCCESS;
    }
}
