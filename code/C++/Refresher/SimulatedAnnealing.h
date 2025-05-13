// SimulatedAnnealing.h
#ifndef SIMULATED_ANNEALING_H
#define SIMULATED_ANNEALING_H

#include <vector>
#include <cmath>
#include <cstdlib>
#include <ctime>

class SimulatedAnnealing {
private:
    // Parameters
    double initialTemp;
    double coolingRate;
    double stepSize;
    int iterationsPerTemp;

    // Current state
    double currentSolution;
    double currentEnergy;

    // Private methods
    double calculateEnergy(double x);
    double generateNeighbor(double current, double stepSize);

public:
    // Constructor
    SimulatedAnnealing(double initialTemp, double coolingRate, 
                       double stepSize, int iterationsPerTemp);

    // Core function
    void run();

    // Getters
    double getSolution() const;
    double getEnergy() const;
};

#endif
