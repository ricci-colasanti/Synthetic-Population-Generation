// main.cpp
#include "SimulatedAnnealing.h"
#include <iostream>

int main() {
    // Initialize SA with parameters
    SimulatedAnnealing sa(100.0, 0.95, 1.0, 100);

    std::cout << "Running Simulated Annealing..." << std::endl;
    sa.run();

    std::cout << "Final solution: " << sa.getSolution() << std::endl;
    std::cout << "Final energy: " << sa.getEnergy() << std::endl;

    return 0;
}
