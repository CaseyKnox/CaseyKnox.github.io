# Summary

I'm Casey Knox, a Research Scientist at [Altec](https://www.altecresearch.com/) specializing in Computer Vision and real-time sensor systems. I focus on developing innovative solutions in 3D pose estimation, multi-modal imaging, and distributed computing architectures.

# Selected Work

## Non-Contact Physiological Monitoring [Link](https://www.diu.mil/latest/department-of-defense-defense-innovation-unit-announce-polygraph-effort-to)
*Research Scientist at Altec Research • Current*

Designed an innovative facial landmark tracking system integrating ToF and thermal imaging, achieving sub-pixel accuracy (<1.3px reprojection error) for biomedical applications. 
- Developed real-time thermal nostril segmentation algorithm fusing ToF and thermal imaging for real time respiratory monitoring
- Utilized classical computer vision techniques such as the Laplacian of Gaussian, edge removal, and connected components for retrieving pore activity index (a correlate of electrodermal activity) from thermal images of the hand

## 3D Human Pose Estimation [Link](https://altecresearch.com/non-contact-sensing/)
*Research Scientist at Altec Research • Current*

Engineered a novel real-time stereo 3D pose estimation system that achieves sub-pixel accuracy by combining SOTA 2D pose detection (Meta's [Sapiens](https://about.meta.com/realitylabs/codecavatars/sapiens/)) with custom epipolar geometry. Key innovations:

- Developed an optimized stereo reconstruction pipeline that processes 6000 weighted samples per joint (17 joints) at 60Hz, setting the foundation for further joint refinement based on a priori biomechanical constraints such as bone length
- Directed a junior engineer’s effort to quantize and run Meta’s [sapiens](https://about.meta.com/realitylabs/codecavatars/sapiens/) 0.3B model on an edge device. Model quantization produced a 4x speedup over the original

## Distributed Sensor Fusion Architecture
*Research Scientist at Altec Research • Current*

Led development of a high-performance distributed sensor fusion system achieving 60Hz processing with <50ms end-to-end latency. The system processes 640x576 16-bit images from multiple cameras using a modular node architecture built on ZeroMQ. Key achievements:

- Designed a nameserver-based node discovery system enabling direct P2P connections, avoiding broker bottlenecks
- Implemented custom serialization protocols for high-throughput tensor data (images, vectors) and low-frequency JSON messages (e.g. calibration data)
- Achieved <1ms latency for processing 8 camera feeds at 60Hz on a single machine
- Created a flexible architecture supporting both edge and cloud deployment with TCP transport, used across multiple computer vision projects
- Oversaw pull requests and code reviews, contributing to a robust and efficient codebase
- Guided junior engineers and interns to make meaningful contributions to the codebase


# Technical Skills

## Core Expertise
- Computer Vision & 3D Geometry
- Real-time System Architecture
- Multi-modal Sensor Fusion
- C++, Python, Bash, ZeroMQ

## Tools & Frameworks
- OpenCV, Eigen, PyTorch
- Linux, CUDA, ROS, Jetson
- Git, Vim

## Relevant Coursework
- Linear Algebra (MIT 18.06)
- Vector Calculus
- Bayesian Machine Learning

# Education

## Master of Science in Computer Science
*Northeastern University*

## Bachelor of Arts in Mathematics
*Ave Maria University*
