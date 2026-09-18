# Hamza Iqbal

Research Associate, Multimodal Vision Research Lab, Washington University in St. Louis
Chief Scientist, 1088 Advisors

1hamzaiqbal@gmail.com · [github.com/1hamzaiqbal](https://github.com/1hamzaiqbal) · [linkedin.com/in/1hamzaiqbal](https://www.linkedin.com/in/1hamzaiqbal) · [Google Scholar](https://scholar.google.com/citations?user=mU-xTzAAAAAJ) · [ORCID 0000-0002-3814-9113](https://orcid.org/0000-0002-3814-9113)

## Summary

Computer vision and geospatial machine learning researcher with an engineering background in radar systems and healthcare data. Co-author of *Tessellating the Earth* (ECCV 2026) and lead author of *GeoDIVE*, an efficient retrieval method for planet-scale image geolocalization now under review. M.S. in Computer Science from WashU (2026), B.S. in Mathematics from the University of Missouri (2020).

## Experience

### Research Associate — Multimodal Vision Research Lab, Washington University in St. Louis
*Nov 2025 – present* (graduate researcher from Nov 2025; research associate after the M.S.). Advisor: Nathan Jacobs.

- Co-authored *Tessellating the Earth* (ECCV 2026): a location encoder built from learnable spherical Voronoi partitions with shared global semantic tokens; state of the art across geospatial classification and regression benchmarks.
- Lead *GeoDIVE*: best-first descent over a multiresolution gallery organized as a forest, matching exhaustive cosine retrieval recall@10 at roughly 10% of the encoding cost; extends to object-level queries. Submitted to WACV.
- Train contrastive CLIP-style vision transformers on large-scale multispectral satellite imagery; distributed experiments on SLURM with PyTorch Lightning; cross-modal retrieval pipelines over hierarchical geospatial tiles.

### Chief Scientist — 1088 Advisors (higher-education strategy consultancy)
*May 2026 – present*

- Lead the data and AI practice; designed and built the analytics platform behind research-strategy diagnostics and innovation scans for research universities.
- Collectors and a data lake over NSF HERD, OpenAlex, USPTO, NIH RePORTER and AUTM data; peer benchmarking of research expenditures, output, funding mix and technology transfer.
- Topic clustering of institutional research portfolios (SPECTER2 embeddings, BERTopic, Leiden); automated LaTeX and PowerPoint report builders.

### Systems Engineer — Uhnder, Inc., Austin, TX
*Jan 2022 – Feb 2025* · digital-code-modulation automotive radar

- Wrote and owned PySCOTT, a link-budget and scan-configuration modeling tool (Python, Dash) predicting SNR across range, Doppler and angle from simulated or measured antenna patterns; its curves set production test limits and drove customer coverage maps.
- Automated test and validation pipelines with 2D/3D coverage visualizations for sensor characterization across hardware configurations (turntables, interference simulation, close-range experiments).
- Link-budget modeling for URA/ULA and sparse-array configurations; DSP-pipeline diagnostics for noise floor, signal magnitude, vector misalignment and phase mismatch.
- ML classification of false alarms, multipath and interference in real-time detections; company-wide bench-test CLI; automated software testing during active development.

### Data Engineer (contract) — Vitana LLC, remote
*Feb – Aug 2023*

- Converted HL7v2.x lab results to FHIR and integrated them with PracticeFusion EMR records in PostgreSQL and MongoDB.
- Spark ETL pipelines consolidating labs, billing and patient records into a queryable data lake with Apache Superset; HIPAA-aware.

### Research Assistant & Data Manager — Stark Lab, Program in Occupational Therapy, WashU School of Medicine
*Jan 2021 – Jan 2022*

- Managed clinical datasets for fall-prevention and Alzheimer's studies with the Knight ADRC; cleaned and structured 5,000+ participant records for cohort selection.
- Statistical analyses of health-outcome and time-series data (Python, MATLAB, SPSS); data dictionaries and cross-instrument merges; REDCap safeguards against data-entry errors.

## Education

- **M.S. in Computer Science**, Washington University in St. Louis, Aug 2025 – May 2026. Coursework: Bayesian ML, large language models, advanced computer vision, deep reinforcement learning, text mining, data mining, information theory, rapid prototyping. Teaching assistant, CSE 4470: Automata & Theory of Computation (Spring 2026).
- **Post Graduate Program in AI & ML: Business Applications**, McCombs School of Business, UT Austin, Mar – Nov 2024.
- **B.S. in Mathematics**, University of Missouri, Columbia, Dec 2020. GPA 3.86.

## Earlier research

- **Research Fellow, Ozden Lab (behavioral neuroscience), University of Missouri**, May 2019 – May 2021. Low-cost, open-source control and timing system for behavioral experiments (Python/C, Arduino, custom PCB): 85% cheaper and 87.5% lower latency than the commercial alternative. Frequency-domain analysis of 3+ TB of mouse EEG. IMSD fellow.
- **Research Assistant, Milescu Lab (computational neuroscience), University of Missouri**, Aug 2017 – Apr 2019. QuB ion-channel simulation software (Delphi); two-photon electrophysiology; low-cost multispectral imaging; lab website migration to Google Cloud.
- **Summer Research Student (STARS), Stark Lab, WashU**, Summer 2016. Participant retention in Knight ADRC studies; presented at IAGG 2017.

## Publications & presentations

- Daniel Cher, **Hamza Iqbal**, Eric Xing, Brian Wei, Nathan Jacobs. *Tessellating the Earth: Learnable Spherical Voronoi Partitions for Location Encoding.* ECCV 2026. [arXiv](https://arxiv.org/abs/2606.27514) · [code](https://github.com/mvrl/TTE) · [ECCV page](https://eccv.ecva.net/virtual/2026/poster/5452) · [talk](https://www.youtube.com/watch?v=YXPyIUUMC_4)
- **Hamza Iqbal** et al. *GeoDIVE: Geospatial Descent Informed by Value Estimation.* Under review, 2026.
- *A Low-cost, Open-source Control and Timing System for Training Animals on Behavioral Tasks.* Posters, SfN 2019 (Chicago) and ABRCMS 2019 (Anaheim).
- Pilot study of participant retention in Alzheimer's disease research. IAGG 2017 World Congress.

## Skills

- **Languages:** Python, SQL, C/C++, JavaScript, MATLAB, Java, R, LaTeX
- **ML & vision:** PyTorch, PyTorch Lightning, Hugging Face, CLIP and contrastive learning, vision transformers, DINOv2, OpenCV, retrieval
- **NLP & agents:** SPECTER2, BERTopic, LangGraph, LangChain, RAG, evaluation harnesses
- **Data engineering:** Spark, pandas, NumPy, SciPy, PostgreSQL, MongoDB, MySQL/MariaDB, Superset, HL7v2, FHIR, REDCap
- **Infrastructure:** Linux, SLURM/HPC, Docker, Git, AWS (EC2, S3), GCP, REST APIs, Dash/Plotly
- **Signal processing & hardware:** radar link budgets and DSP diagnostics, spectrum analyzers, signal generators, Arduino, Raspberry Pi, PCB design (Eagle), CAD, 3D printing
