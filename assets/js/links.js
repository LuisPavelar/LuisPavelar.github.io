/* -------------------------------------------------------------------------
   ARQUIVO DE LINKS - P. AVELAR
   ------------------------------------------------------------------------- */

window.CONFIG = {

    // --- MENUS LATERAIS ---
    menus: [
        {
            titulo: "TUTORIAIS",
            itens: [
                { nome: "Arq - Modelagem",      link: "https://classroom.google.com/w/Njg4OTYxNDc5NjQ2/t/all" },
                { nome: "Geral - Formatos",     link: "https://classroom.google.com/w/NzU1NzU5NTM4OTA3/t/all" },
                { nome: "Geral - ACC",          link: "https://classroom.google.com/c/NzYwNDc2NDg3OTc4" }
            ]
        },
        {
            titulo: "TEMPLATES",
            itens: [
                { nome: "Arquitetura",      link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\ARQUITETURA" },
                { nome: "Elétrica",         link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\ELETRICA" },
                { nome: "Hidráulica",       link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\HIDRAULICA" },
                { nome: "Estrutural",       link: "G:\\Drives compartilhados\\BIM\\TEMPLATES\\CIVIL" }
            ]
        },
        {
            titulo: "PROCESSOS",
            itens: [
                { nome: "Aprovação ACC", tipo: "acao_fluxo", link: "" },
                { nome: "Manual Processo",       link: "pages/aprovacao-arq-acc.html" },
                { nome: "Processo Estrutural",   link: "pages/proc-est.html" },
                { nome: "Processo Elétrica",     link: "pages/proc-ele.html" },
                { nome: "Processo Hidro",        link: "pages/proc-hidro.html" }
            ]
        },
        {
            titulo: "EQUIPE BIM",
            itens: [
                { nome: "Templates Internos",    link: "pages/bim-templates.html" },
                { nome: "Tutoriais Internos",    link: "pages/bim-tutoriais.html" },
                { nome: "Processos Internos",    link: "pages/bim-processos.html" }
            ]
        }
    ],

    // --- CONFIGURAÇÃO DOS FLUXOGRAMAS ---
    fluxogramas: {
        inicial: "assets/bpmn/geral-macro-fases.bpmn", 
        
        links: {
            "as built":     "assets/bpmn/arq-acc-aprovacao asbuilt.bpmn",
            "anteprojeto":  "assets/bpmn/arq-acc-aprovacao anteprojeto.bpmn",
            "ante-projeto": "assets/bpmn/arq-acc-aprovacao anteprojeto.bpmn",
            "executivo":    "assets/bpmn/arq-acc-aprovacao executivo.bpmn"
        }
    }
};
