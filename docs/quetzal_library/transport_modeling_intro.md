---
layout: doc
aside: false
---

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

- The sequence of the four steps is based on :
    - Data workflow constraints e.g., the outputs of the generation are used for the distribution
    - Our understanding of the decision process 
    - A calibration order that minimizes the need for feedbacks and saves time
- It is flexible though:
    - The travel times generated in the assignment are used in the upstream steps of distribution and modal split
    - Two or more steps can be integrated in order to model our choices more accurately.

![classical four step structure](/transport_modeling/steps_en.png)

- Although Quetzal provides the tools to build a standard four-stage model, we often use another framework to better model multi-modality and ensure consistency between the modal split and the assignment
- *Generation* and *distribution* remain the same
- The *pathfinder* step enumerates all the paths of the different modes, public and private
- The *logit* step does the modal split and the weighting of the different itineraries
- Retroaction *loops* are used between the steps
![classical four step structure](/transport_modeling/steps_quetzal_loop_PR_en.png)

# Assignment
## Optimal Strategies

- *Optimal Strategies* can be established toward the destinations
- It a set of relevant line to board at each station and associated alighting stations
- The path is not known beforehand but is built along the journey of the traveler
- The expected time of arrival is better than the better sequence of lines yielded by the shortest path algorithm run in a frequency-based graph
- The assignment on each link is derived from the deterministic strategies
![classical four step structure](/transport_modeling/OS_map.png)
On this complex example in Dire Dawa (Ethiopia), users start from Misrak Buna in the east and go to Kebele 2 in the west
Then they wait in Lega Hare, for the 10 or 10bis to stop and board the first one.
Then, those who board line 10 alight in Legehar and the users of line 10 bis alight in Ashawa.
Both line 1 and line 22bis stop at Ashawa (first stop) and Legehar. Our users will board the first of these line to stop at their station. 
Once they are in line 1 or 22bis, they will alight in Bridge to board the line 18 and alight at Jerba Police then walk to their final destination.
![classical four step structure](/transport_modeling/OS_flowchart.png)


