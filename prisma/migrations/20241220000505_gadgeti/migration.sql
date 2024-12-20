-- CreateTable
CREATE TABLE `smartphone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand` VARCHAR(191) NOT NULL,
    `serie` VARCHAR(191) NOT NULL,
    `warna` VARCHAR(191) NOT NULL,
    `kapasitas` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
