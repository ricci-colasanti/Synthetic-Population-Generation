// sa_refresher.cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <cstdlib>  // For rand()
#include <ctime>    // For time()

using namespace std;

// Function to compute "energy" (cost) of a solution
double calculateEnergy(double x) {
    // Placeholder: We'll use a simple quadratic function for now
    return x * x;  // Minimizing x^2 (optimal solution is x=0)
}

// NEW: Generate a neighbor close to the current solution
double generateNeighbor(double current, double stepSize) {
    double perturbation = (rand() % 2000 - 1000) / 1000.0 * stepSize;  // Random in [-stepSize, stepSize]
    return current + perturbation;
}

int main() {
    srand(time(0));

    // Parameters
    double initialTemp = 100.0;    // Initial temperature
    double coolingRate = 0.95;     // How fast T decreases
    double stepSize = 1.0;         // Max perturbation size
    int iterationsPerTemp = 100;   // Steps at each temperature

    // Initial solution
    double currentSolution = (rand() % 2000) / 100.0 - 10.0;
    double currentEnergy = calculateEnergy(currentSolution);

    cout << "Initial solution: " << currentSolution << ", energy: " << currentEnergy << endl;

    // NEW: Simulated Annealing loop
    double T = initialTemp;
    while (T > 1e-5) {  // Stop when T is very small
        for (int i = 0; i < iterationsPerTemp; i++) {
            // Generate neighbor
            double neighbor = generateNeighbor(currentSolution, stepSize);
            double neighborEnergy = calculateEnergy(neighbor);

            // Acceptance probability
            double deltaE = neighborEnergy - currentEnergy;
            double acceptanceProb = exp(-deltaE / T);

            // Accept if better or with probability exp(-ΔE/T)
            if (deltaE < 0 || (rand() % 1000) / 1000.0 < acceptanceProb) {
                currentSolution = neighbor;
                currentEnergy = neighborEnergy;
            }
        }

        // Cool down
        T *= coolingRate;
    }

    cout << "Final solution: " << currentSolution << ", energy: " << currentEnergy << endl;
    return 0;
}
