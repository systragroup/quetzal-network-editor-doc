# WORK IN PROGRESS | WIP
This section is progress, we hope to provide a more comprehensive introduction to static macroscopic transport modeling soon.
A complete introduction to the topic can be found in the book that inspired most of Quetzal's implementation.

*de Dios Ortúzar, J., & Willumsen, L. G. (2024). Modelling transport. John wiley & sons*
# Inputs
Work in progress
# Outputs
Work in progress
# 4 Step Structure
Quetzal was inspired by the classical 4 step transport modeling and provides algorithms
![classical four step structure](/transport_modeling/steps_en.png)
- The sequence of the four steps is based on :
    - Data workflow constraints e.g., the outputs of the generation are used for the distribution
    - Our understanding of the decision process 
    - A calibration order that minimizes the need for feedbacks and saves time
- It is flexible though:
    - The travel times generated in the assignment are used in the upstream steps of distribution and modal split
    - Two or more steps can be integrated in order to model our choices more accurately.

- Although Quetzal provides the tools to build a standard four-stage model, we often use another framework to better model multi-modality and ensure consistency between the modal split and the assignment
- *Generation* and *distribution* remain the same
- The *pathfinder* step enumerates all the paths of the different modes, public and private
- The *logit* step does the modal split and the weighting of the different itineraries
- Retroaction *loops* are used between the steps
![classical four step structure](/transport_modeling/steps_quetzal_loop_PR_en.png)

