import React, { useState } from 'react';

function App() {
  const [tesistaNombre, setTesistaNombre] = useState('');
  const [tesistaLegajo, setTesistaLegajo] = useState('');
  const [anioAceptacion, setAnioAceptacion] = useState('');
  const [directoraNombre, setDirectoraNombre] = useState('');
  const [codirectoraNombre, setCodirectoraNombre] = useState('');
  const [creditosReconocidos, setCreditosReconocidos] = useState('');
  const [pruebaIdioma, setPruebaIdioma] = useState('');
  const [requisitoRequisito, setRequisitoRequisito] = useState(false);
  const [requisitoArticulo, setRequisitoArticulo] = useState(false);
  const [requisitoTransferencia, setRequisitoTransferencia] = useState(false);
  const [requisitoPatente, setRequisitoPatente] = useState(false);
  const [reconocidoRectorado, setReconocidoRectorado] = useState('');
  const [contribucionUltimoAnio, setContribucionUltimoAnio] = useState('');
  const [circunstancias, setCircunstancias] = useState([]);
  const [Otros, setOtros] = useState('');
  const [actividades, setActividades] = useState({
    bibliografica: false,
    cursosPostgrado: false,
    desarrolloExperimental: false,
    asistenciaCongresos: false,
    comunicaciones: false,
    manuscritos: false,
    publicacionArticulos: false,
    presentaciones: false,
    pasantias: false,
    formacionrrhh: false,
    participacion: false,
    premios: false,
  });
  const [plazoTesis, setPlazoTesis] = useState('');
  const [actividadesfuturas, setActividadesFuturas] = useState({
    cursosFut: false,
    revisionFut: false,
    experimentosFut: false,
    infoFut: false,
    tesisFut: false,
  });

  const [CursosTabla, setCursosTabla] = useState([
    {
      cursos: '',
      horas: '',
      institucion: '',
      docentes: '',
    },
  ]);

  const addCursosTabla = () => {
    setCursosTabla([...CursosTabla, { cursos: '', horas: '', institucion: '', docentes: '' }]);
  };

  const deleteCursosTabla = (index) => {
    const updatedCursosTabla = CursosTabla.filter((_, i) => i !== index);
    setCursosTabla(updatedCursosTabla);
  };

  const handleCursosTablaInputChange = (index, field, value) => {
    const updatedCursosTabla = [...CursosTabla];
    updatedCursosTabla[index][field] = value;
    setCursosTabla(updatedCursosTabla);
  };

const [MetodologicoTabla, setMetodologicoTabla] = useState([
  {
    cursos: '',
    horas: '',
    institucion: '',
    docentes: '',
  },
]);

const addMetodologicoTabla = () => {
  setMetodologicoTabla([...MetodologicoTabla, { cursos: '', horas: '', institucion: '', docentes: '' }]);
};

const deleteMetodologicoTabla = (index) => {
  const updatedMetodologicoTabla = MetodologicoTabla.filter((_, i) => i !== index);
  setMetodologicoTabla(updatedMetodologicoTabla);
};

const handleMetodologicoTablaInputChange = (index, field, value) => {
  const updatedMetodologicoTabla = [...MetodologicoTabla];
  updatedMetodologicoTabla[index][field] = value;
  setMetodologicoTabla(updatedMetodologicoTabla);
};

const [TalleresTabla, setTalleresTabla] = useState([
  {
    taller: '',
    horas: '',
    lugar: '',
  },
]);

const addTalleresTabla = () => {
  setTalleresTabla([...TalleresTabla, { taller: '', horas: '', lugar: ''}]);
};

const deleteTalleresTabla = (index) => {
  const updatedTalleresTabla = TalleresTabla.filter((_, i) => i !== index);
  setTalleresTabla(updatedTalleresTabla);
};

const handleTalleresTablaInputChange = (index, field, value) => {
  const updatedTalleresTabla = [...TalleresTabla];
  updatedTalleresTabla[index][field] = value;
  setTalleresTabla(updatedTalleresTabla);
};

const [PublicacionesC1Tabla, setPublicacionesC1Tabla] = useState([
  {
    titulo: '',
    autores: '',
    revista: '',
    anio: '',
    lugar: '',
    doi: '',
    issn: '',
  },
]);

const addPublicacionesC1Tabla = () => {
  setPublicacionesC1Tabla([...PublicacionesC1Tabla, { titulo: '', autores: '', revista: '', anio: '', lugar: '', doi: '', issn: ''}]);
};

const deletePublicacionesC1Tabla = (index) => {
  const updatedPublicacionesC1Tabla = PublicacionesC1Tabla.filter((_, i) => i !== index);
  setPublicacionesC1Tabla(updatedPublicacionesC1Tabla);
};

const handlePublicacionesC1TablaInputChange = (index, field, value) => {
  const updatedPublicacionesC1Tabla = [...PublicacionesC1Tabla];
  updatedPublicacionesC1Tabla[index][field] = value;
  setPublicacionesC1Tabla(updatedPublicacionesC1Tabla);
};

const [PublicacionesC2Tabla, setPublicacionesC2Tabla] = useState([
  {
    titulo: '',
    autores: '',
    revista: '',
    anio: '',
    lugar: '',
    doi: '',
    issn: '',
  },
]);

const addPublicacionesC2Tabla = () => {
  setPublicacionesC2Tabla([...PublicacionesC2Tabla, { titulo: '', autores: '', revista: '', anio: '', lugar: '', doi: '', issn: ''}]);
};

const deletePublicacionesC2Tabla = (index) => {
  const updatedPublicacionesC2Tabla = PublicacionesC2Tabla.filter((_, i) => i !== index);
  setPublicacionesC2Tabla(updatedPublicacionesC2Tabla);
};

const handlePublicacionesC2TablaInputChange = (index, field, value) => {
  const updatedPublicacionesC2Tabla = [...PublicacionesC2Tabla];
  updatedPublicacionesC2Tabla[index][field] = value;
  setPublicacionesC2Tabla(updatedPublicacionesC2Tabla);
};
 
const [PublicacionesC3Tabla, setPublicacionesC3Tabla] = useState([
  {
    titulo: '',
    autores: '',
    revista: '',
    anio: '',
    lugar: '',
    doi: '',
    issn: '',
  },
]);

const addPublicacionesC3Tabla = () => {
  setPublicacionesC3Tabla([...PublicacionesC3Tabla, { titulo: '', autores: '', revista: '', anio: '', lugar: '', doi: '', issn: ''}]);
};

const deletePublicacionesC3Tabla = (index) => {
  const updatedPublicacionesC3Tabla = PublicacionesC3Tabla.filter((_, i) => i !== index);
  setPublicacionesC3Tabla(updatedPublicacionesC3Tabla);
};

const handlePublicacionesC3TablaInputChange = (index, field, value) => {
  const updatedPublicacionesC3Tabla = [...PublicacionesC3Tabla];
  updatedPublicacionesC3Tabla[index][field] = value;
  setPublicacionesC3Tabla(updatedPublicacionesC3Tabla);
};

const [PublicacionesC4Tabla, setPublicacionesC4Tabla] = useState([
  {
    autores: '',
    titulo: '',
    congreso: '',
    anio: '',
    lugar: '',
    doi: '',
    issn: '',
  },
]);

const addPublicacionesC4Tabla = () => {
  setPublicacionesC4Tabla([...PublicacionesC4Tabla, {  autores: '', titulo: '', congreso: '', anio: '', lugar: '', doi: '', issn: ''}]);
};

const deletePublicacionesC4Tabla = (index) => {
  const updatedPublicacionesC4Tabla = PublicacionesC4Tabla.filter((_, i) => i !== index);
  setPublicacionesC4Tabla(updatedPublicacionesC4Tabla);
};

const handlePublicacionesC4TablaInputChange = (index, field, value) => {
  const updatedPublicacionesC4Tabla = [...PublicacionesC4Tabla];
  updatedPublicacionesC4Tabla[index][field] = value;
  setPublicacionesC4Tabla(updatedPublicacionesC4Tabla);
};

const [LibrosTabla, setLibrosTabla] = useState([
  {
    autores: '',
    titulolibro: '',
    tituloarticulo: '',
    revista: '',
    anio: '',
    lugar: '',
    doi: '',
    issn: '',
  },
]);

const addLibrosTabla = () => {
  setLibrosTabla([...LibrosTabla, { autores: '', titulolibro: '', tituloarticulo: '', revista: '', anio: '', lugar: '', doi: '', issn: ''}]);
};

const deleteLibrosTabla = (index) => {
  const updatedLibrosTabla = LibrosTabla.filter((_, i) => i !== index);
  setLibrosTabla(updatedLibrosTabla);
};

const handleLibrosTablaInputChange = (index, field, value) => {
  const updatedLibrosTabla = [...LibrosTabla];
  updatedLibrosTabla[index][field] = value;
  setLibrosTabla(updatedLibrosTabla);
};

const [PasantiasTabla, setPasantiasTabla] = useState([
  {
    lugar: '',
    horas: '',  
  },
]);

const addPasantiasTabla = () => {
  setLibrosTabla([...LibrosTabla, { lugar: '', horas: '',  }]);
};

const deletePasantiasTabla = (index) => {
  const updatedPasantiasTabla = PasantiasTabla.filter((_, i) => i !== index);
  setPasantiasTabla(updatedPasantiasTabla);
};

const handlePasantiasTablaInputChange = (index, field, value) => {
  const updatedPasantiasTabla = [...PasantiasTabla];
  updatedPasantiasTabla[index][field] = value;
  setPasantiasTabla(updatedPasantiasTabla);
};


const [RHTabla, setRHTabla] = useState([
  {
    descripcion: '',  
  },
]);

const addRHTabla = () => {
  setRHTabla([...RHTabla, { descripcion: ''}]);
};

const deleteRHTabla = (index) => {
  const updatedRHTabla = RHTabla.filter((_, i) => i !== index);
  setRHTabla(updatedRHTabla);
};

const handleRHTablaInputChange = (index, field, value) => {
  const updatedRHTabla = [...RHTabla];
  updatedRHTabla[index][field] = value;
  setRHTabla(updatedRHTabla);
};

const [PremiosTabla, setPremiosTabla] = useState([
  {
    titulo: '',
    participantes: '',
    lugar: '',
    anio: '',
  },
]);

const addPremiosTabla = () => {
  setPremiosTabla([...PremiosTabla, { titulo: '', participantes: '', lugar: '', anio: '',}]);
};

const deletePremiosTabla = (index) => {
  const updatedPremiosTabla = PremiosTabla.filter((_, i) => i !== index);
  setPremiosTabla(updatedPremiosTabla);
};

const handlePremiosTablaInputChange = (index, field, value) => {
  const updatedPremiosTabla = [...PremiosTabla];
  updatedPremiosTabla[index][field] = value;
  setPremiosTabla(updatedPremiosTabla);
};

const [DesarrolloTabla, setDesarrolloTabla] = useState([
  {
    descripcion: '',
    anio: '',
    participacion: '',
    otros: '',
  },
]);

const addDesarrolloTabla = () => {
  setDesarrolloTabla([...DesarrolloTabla, { descripcion: '', anio: '', participacion: '', otros: '' ,}]);
};

const deleteDesarrolloTabla = (index) => {
  const updatedDesarrolloTabla = DesarrolloTabla.filter((_, i) => i !== index);
  setDesarrolloTabla(updatedDesarrolloTabla);
};

const handleDesarrolloTablaInputChange = (index, field, value) => {
  const updatedDesarrolloTabla = [...DesarrolloTabla];
  updatedDesarrolloTabla[index][field] = value;
  setDesarrolloTabla(updatedDesarrolloTabla);
};
//TEST3
const [PatentesTabla, setPatentesTabla] = useState([
  {
    descripcion: '',
    anio: '',
    participacion: '',
    otros: '',
  },
]);

const addPatentesTabla = () => {
  setPatentesTabla([...PatentesTabla, { descripcion: '', anio: '', participacion: '', otros: '' ,}]);
};

const deletePatentesTabla = (index) => {
  const updatedPatentesTabla = PatentesTabla.filter((_, i) => i !== index);
  setPatentesTabla(updatedPatentesTabla);
};

const handlePatentesTablaInputChange = (index, field, value) => {
  const updatedPatentesTabla = [...PatentesTabla];
  updatedPatentesTabla[index][field] = value;
  setPatentesTabla(updatedPatentesTabla);
};
//fin test

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log('Formulario enviado');
  };

  return (
    <div>
      <h1>Planilla Informe Avance</h1>
      <h2>DOCTORADO EN INGENIERIA</h2>
      <h3>Informe anual del director</h3>

      <form onSubmit={handleSubmit}>
        <h3>Datos del/la tesista y sus Directores:</h3>
        <label>
          Nombre y apellido del/la Tesista:
          <input
            type="text"
            value={tesistaNombre}
            onChange={(e) => setTesistaNombre(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Legajo del/la Tesista:
          <input
            type="text"
            value={tesistaLegajo}
            onChange={(e) => setTesistaLegajo(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Año de aceptación en el Doctorado:
          <input
            type="text"
            value={anioAceptacion}
            onChange={(e) => setAnioAceptacion(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Nombre y apellido del/la Directora/a:
          <input
            type="text"
            value={directoraNombre}
            onChange={(e) => setDirectoraNombre(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Nombre y apellido del/la Co-Director/a:
          <input
            type="text"
            value={codirectoraNombre}
            onChange={(e) => setCodirectoraNombre(e.target.value)}
          />
        </label>

        <h3>Requisitos de graduación:</h3>
        <label>
          Número de créditos reconocidos por Rectorado:
          <input
            type="text"
            value={creditosReconocidos}
            onChange={(e) => setCreditosReconocidos(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Aprobó la prueba de suficiencia de idioma inglés? (indique SI o NO):
          <input
            type="text"
            value={pruebaIdioma}
            onChange={(e) => setPruebaIdioma(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          ¿Cumple con alguno de estos requisitos?
          <input
            type="checkbox"
            checked={requisitoRequisito}
            onChange={(e) => setRequisitoRequisito(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          Haber publicado al menos UN (1) artículo producto de la tesis en una revista indexada como autor/a principal.
          <input
            type="checkbox"
            checked={requisitoArticulo}
            onChange={(e) => setRequisitoArticulo(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          Haber realizado transferencia de tecnología original, con relación directa con el tema de tesis, con un nivel de maduración tecnológica TRL 6 o superior.
          <input
            type="checkbox"
            checked={requisitoTransferencia}
            onChange={(e) => setRequisitoTransferencia(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          Participar con rol de inventor/a en una patente otorgada de un producto de la tesis.
          <input
            type="checkbox"
            checked={requisitoPatente}
            onChange={(e) => setRequisitoPatente(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          En caso de que haya cumplido con alguno de los requisitos, indicar si ya fue reconocido por Rectorado:
          <input
            type="text"
            value={reconocidoRectorado}
            onChange={(e) => setReconocidoRectorado(e.target.value)}
          />
        </label>

        <h4>(1) En función del cronograma presentado en el plan de trabajo del/la Tesista, ¿en qué medida contribuyó el trabajo desarrollado en el último año al cumplimiento de los objetivos propuestos en el plan de tesis? (marcar con una cruz):</h4>
        <label>
          <input
            type="radio"
            name="contribucionUltimoAnio"
            value="Satisfactoriamente"
            checked={contribucionUltimoAnio === 'Satisfactoriamente'}
            onChange={(e) => setContribucionUltimoAnio(e.target.value)}
          />
          Satisfactoriamente (pase a la pregunta 3)
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="contribucionUltimoAnio"
            value="Poco satisfactoriamente"
            checked={contribucionUltimoAnio === 'Poco satisfactoriamente'}
            onChange={(e) => setContribucionUltimoAnio(e.target.value)}
          />
          Poco satisfactoriamente
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="contribucionUltimoAnio"
            value="No satisfactorio"
            checked={contribucionUltimoAnio === 'No satisfactorio'}
            onChange={(e) => setContribucionUltimoAnio(e.target.value)}
          />
          No satisfactorio
        </label>

        <h4>(2)Si respondió "poco satisfactorio" o "no satisfactorio", indique las circunstancias o problemas que causaron este grado de avance (marcar con una cruz):</h4>
        <label>
          Problemas de salud del/la Tesista
          <input
            type="checkbox"
            checked={circunstancias.includes('Problemas de salud del/la Tesista')}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([...circunstancias, 'Problemas de salud del/la Tesista']);
              } else {
                setCircunstancias(circunstancias.filter((c) => c !== 'Problemas de salud del/la Tesista'));
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Problemas de salud de un familiar
          <input
            type="checkbox"
            checked={circunstancias.includes('Problemas de salud de un familiar')}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([...circunstancias, 'Problemas de salud de un familiar']);
              } else {
                setCircunstancias(circunstancias.filter((c) => c !== 'Problemas de salud de un familiar'));
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)
          <input
            type="checkbox"
            checked={circunstancias.includes('Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)')}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([...circunstancias, 'Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)']);
              } else {
                setCircunstancias(circunstancias.filter((c) => c !== 'Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)'));
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)
          <input
            type="checkbox"
            checked={circunstancias.includes('Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)')}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([...circunstancias, 'Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)']);
              } else {
                setCircunstancias(circunstancias.filter((c) => c !== 'Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)'));
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)
          <input
            type="checkbox"
            checked={circunstancias.includes('Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)')}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([...circunstancias, 'Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)']);
              } else {
                setCircunstancias(circunstancias.filter((c) => c !== 'Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)'));
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Falta de motivación o compromiso del/la Tesista en las tareas
          <input
            type="checkbox"
            checked={circunstancias.includes('Falta de motivación o compromiso del/la Tesista en las tareas')}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([...circunstancias, 'Falta de motivación o compromiso del/la Tesista en las tareas']);
              } else {
                setCircunstancias(circunstancias.filter((c) => c !== 'Falta de motivación o compromiso del/la Tesista en las tareas'));
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Otros problemas (detalle brevemente):
          <input
            type="text"
            value={Otros}
            onChange={(e) => setOtros(e.target.value)}
          />
        </label>

        <h4>(3) Indique las actividades del plan de trabajo en donde el/la Tesista ha avanzado durante el último año:</h4>
        <label>
          Actualización bibliográfica en el tema de la tesis
          <input
            type="checkbox"
            checked={actividades.bibliografica}
            onChange={(e) => setActividades({ ...actividades, bibliografica: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Realización de cursos de postgrado dentro del plan propuesto en la beca
          <input
            type="checkbox"
            checked={actividades.cursosPostgrado}
            onChange={(e) => setActividades({ ...actividades, cursosPostgrado: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Desarrollo experimental (actividades de laboratorio, actividades de campo, elaboración o aplicación de instrumentos específicos para la recolección o procesamiento de datos, diseño de prototipos, etc.)
          <input
            type="checkbox"
            checked={actividades.desarrolloExperimental}
            onChange={(e) => setActividades({ ...actividades, desarrolloExperimental: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Asistencia a congresos, jornadas, talleres, etc.
          <input
            type="checkbox"
            checked={actividades.asistenciaCongresos}
            onChange={(e) => setActividades({ ...actividades, asistenciaCongresos: e.target.checked })}
          /> 
        </label>
        <br></br>
        <label>
          Elaboración y presentación de comunicaciones, póster o publicaciones en congresos, jornadas, talleres, etc
          <input
            type="checkbox"
            checked={actividades.comunicaciones}
            onChange={(e) => setActividades({ ...actividades, comunicaciones: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Elaboración de manuscritos no publicados (capítulos de tesis, publicaciones científicas)
          <input
            type="checkbox"
            checked={actividades.manuscritos}
            onChange={(e) => setActividades({ ...actividades, manuscritos: e.target.checked })}
          />
        </label>
        <label>
          Publicación de artículos en revistas científicas del área (en prensa o publicadas)
          <input
            type="checkbox"
            checked={actividades.publicacionArticulos}
            onChange={(e) => setActividades({ ...actividades, publicacionArticulos: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Presentación de patentes, modelos, diseños protegidos por propiedad intelectual
          <input
            type="checkbox"
            checked={actividades.presentaciones}
            onChange={(e) => setActividades({ ...actividades, presentaciones: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Pasantías en Universidades/Institutos o Centros de Investigación. (por un periodo no menos a 3 meses)
          <input
            type="checkbox"
            checked={actividades.pasantias}
            onChange={(e) => setActividades({ ...actividades, pasantias: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Formación de recursos humanos
          <input
            type="checkbox"
            checked={actividades.formacionrrhh}
            onChange={(e) => setActividades({ ...actividades, formacionrrhh: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Dirección y/o participación en proyectos de investigación
          <input
            type="checkbox"
            checked={actividades.participacion}
            onChange={(e) => setActividades({ ...actividades, participacion: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Premios
          <input
            type="checkbox"
            checked={actividades.premios}
            onChange={(e) => setActividades({ ...actividades, premios: e.target.checked })}
          />
        </label>

       
        <h4>De acuerdo con el avance en el plan de tesis y el plan de la Carrera de Doctorado, ¿cómo evalúa la situación del/la Tesista en relación con la posibilidad de finalizar la tesis de doctorado en el plazo previsto por la beca?:</h4>
        <label>
          Es probable que logre finalizarla en el plazo previsto
          <input
            type="radio"
            name="PlazoTesis"
            value="Es probable que logre finalizarla en el plazo previsto"
            checked={plazoTesis === 'Es probable que logre finalizarla en el plazo previsto'}
            onChange={(e) => setPlazoTesis(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Es poco probable que logre finalizarla en el plazo previsto
          <input
            type="radio"
            name="PlazoTesis"
            value="Es poco probable que logre finalizarla en el plazo previsto"
            checked={plazoTesis === 'Es poco probable que logre finalizarla en el plazo previsto'}
            onChange={(e) => setPlazoTesis(e.target.value)}
          />
        </label>
        

        <h4>(5) Indique las principales actividades en donde el/la Tesista debería focalizarse para finalizar la tesis de doctorado en el plazo previsto por la beca:</h4>
        <label>
          Asistencia a los cursos de postgrado previstos en el Plan propuesto en la beca
          <input
            type="checkbox"
            checked={actividadesfuturas.cursosFut}
            onChange={(e) => setActividadesFuturas({ ...actividadesfuturas, cursosFut: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Revisión y/o reformulación del proyecto de tesis (antecedentes, hipótesis, etc.) o puesta a punto de técnicas o diseños experimentales
          <input
            type="checkbox"
            checked={actividadesfuturas.revisionFut}
            onChange={(e) => setActividadesFuturas({ ...actividadesfuturas, revisionFut: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Desarrollo de experimentos (actividades de laboratorio, actividades a campo, aplicación de instrumentos específicos para la recolección o procesamiento de datos, diseño de prototipos, etc.)
          <input
            type="checkbox"
            checked={actividadesfuturas.experimentosFut}
            onChange={(e) => setActividadesFuturas({ ...actividadesfuturas, experimentosFut: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Análisis de la información recolectada
          <input
            type="checkbox"
            checked={actividadesfuturas.infoFut}
            onChange={(e) => setActividadesFuturas({ ...actividadesfuturas, infoFut: e.target.checked })}
          />
        </label>
        <br></br>
        <label>
          Redacción de la tesis
          <input
            type="checkbox"
            checked={actividadesfuturas.tesisFut}
            onChange={(e) => setActividadesFuturas({ ...actividadesfuturas, tesisFut: e.target.checked })}
          />
        </label>
        <br></br>
    
   <div>
      <h3>A Completar por el tesista</h3>
      <h4>a.1- Cursos específicamente vinculados con la temática de la tesis.</h4>
        <label>
          Cursos vinculados  (min 32) Horas Institución Docentes
            
        </label>
        <br></br>
          {CursosTabla.map((row, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <label>
                  <input
                    type="text"
                    value={row.cursos}
                    onChange={(e) => handleCursosTablaInputChange(index, 'cursos', e.target.value)}
                  />

                  <input
                    type="text"
                    value={row.horas}
                    onChange={(e) => handleCursosTablaInputChange(index, 'horas', e.target.value)}
                  />

                  <input
                    type="text"
                    value={row.institucion}
                    onChange={(e) => handleCursosTablaInputChange(index, 'institucion', e.target.value)}
                  />

                  <input
                    type="text"
                    value={row.docentes}
                    onChange={(e) => handleCursosTablaInputChange(index, 'docentes', e.target.value)}
                  />
                </label>
                <button onClick={() => deleteCursosTabla(index)}>X</button>
              </div>
                
            ))}
                <button onClick={addCursosTabla}>Agregar Fila</button>
              </div>  

      <div>
      <h4>a.2 - Cursos Metodológicos</h4>
        <label>
          Cursos vinculados(6-8) Horas Institución Docentes
        </label>

        {MetodologicoTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.cursos}
                  onChange={(e) => handleMetodologicoTablaInputChange(index, 'cursos', e.target.value)}
                />

                <input
                  type="text"
                  value={row.horas}
                  onChange={(e) => handleMetodologicoTablaInputChange(index, 'horas', e.target.value)}
                />

                <input
                  type="text"
                  value={row.institucion}
                  onChange={(e) => handleMetodologicoTablaInputChange(index, 'institucion', e.target.value)}
                />

                <input
                  type="text"
                  value={row.docentes}
                  onChange={(e) => handleMetodologicoTablaInputChange(index, 'docentes', e.target.value)}
                />
              </label>
              <button onClick={() => deleteMetodologicoTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addMetodologicoTabla}>Agregar Fila</button>
          </div>

          <div>
      <h4>b. Talleres y Jornadas de Investigación</h4>
        <label>
        Taller/Jornada Horas Lugar
        </label>

        {TalleresTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.cursos}
                  onChange={(e) => handleTalleresTablaInputChange(index, 'cursos', e.target.value)}
                />

                <input
                  type="text"
                  value={row.horas}
                  onChange={(e) => handleTalleresTablaInputChange(index, 'horas', e.target.value)}
                />

                <input
                  type="text"
                  value={row.institucion}
                  onChange={(e) => handleTalleresTablaInputChange(index, 'lugar', e.target.value)}
                />

              </label>
              <button onClick={() => deleteTalleresTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addTalleresTabla}>Agregar Fila</button>
          </div>  
  
      <div>
      <h3>c- Publicaciones</h3>
      <h4>c-1 Publicaciones en revistas internacionales. indexadas, con referato. Detallar la siguiente información: </h4>
        <label>
        título, autores, revista, año, lugar, DOI, ISSN
        </label>

        {PublicacionesC1Tabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.titulo}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'titulo', e.target.value)}
                />

                <input
                  type="text"
                  value={row.autores}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'autores', e.target.value)}
                />

                <input
                  type="text"
                  value={row.revista}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'revista', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'anio', e.target.value)}
                />

                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'lugar', e.target.value)}
                />

                <input
                  type="text"
                  value={row.doi}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'doi', e.target.value)}
                />

                <input
                  type="text"
                  value={row.issn}
                  onChange={(e) => handlePublicacionesC1TablaInputChange(index, 'issn', e.target.value)}
                />

              </label>
              <button onClick={() => deletePublicacionesC1Tabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPublicacionesC1Tabla}>Agregar Fila</button>
          </div>  

          <div>
          <h4>c-2 Publicaciones en revistas nacionales indexadas, con referato. Detallar la siguiente información:</h4>
          <label>
        título, autores, revista, año, lugar, DOI, ISSN
        </label>

        {PublicacionesC2Tabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.titulo}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'titulo', e.target.value)}
                />

                <input
                  type="text"
                  value={row.autores}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'autores', e.target.value)}
                />

                <input
                  type="text"
                  value={row.revista}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'revista', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'anio', e.target.value)}
                />

                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'lugar', e.target.value)}
                />

                <input
                  type="text"
                  value={row.doi}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'doi', e.target.value)}
                />

                <input
                  type="text"
                  value={row.issn}
                  onChange={(e) => handlePublicacionesC2TablaInputChange(index, 'issn', e.target.value)}
                />

              </label>
              <button onClick={() => deletePublicacionesC2Tabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPublicacionesC2Tabla}>Agregar Fila</button>
          </div>  

          <div>
          <h4>c-3 Artículos en revistas sin referato. Detallar la siguiente información:</h4>
          <label>
        título, autores, revista, año, lugar, DOI, ISSN
        </label>

        {PublicacionesC3Tabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.titulo}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'titulo', e.target.value)}
                />

                <input
                  type="text"
                  value={row.autores}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'autores', e.target.value)}
                />

                <input
                  type="text"
                  value={row.revista}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'revista', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'anio', e.target.value)}
                />

                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'lugar', e.target.value)}
                />

                <input
                  type="text"
                  value={row.doi}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'doi', e.target.value)}
                />

                <input
                  type="text"
                  value={row.issn}
                  onChange={(e) => handlePublicacionesC3TablaInputChange(index, 'issn', e.target.value)}
                />

              </label>
              <button onClick={() => deletePublicacionesC3Tabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPublicacionesC3Tabla}>Agregar Fila</button>
          </div>

        <div>
          <h4>c-4 Congresos internacionales y nacionales de la especialidad con referato. Detallar la siguiente información:</h4>
          <label>
        autores, título, congreso, año, lugar, DOI, ISSN
        </label>

        {PublicacionesC4Tabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.autores}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index, 'autores', e.target.value)}
                />

                <input
                  type="text"
                  value={row.titulo}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index,'titulo' , e.target.value)}
                />

                <input
                  type="text"
                  value={row.congreso}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index, 'congreso', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index, 'anio', e.target.value)}
                />

                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index, 'lugar', e.target.value)}
                />

                <input
                  type="text"
                  value={row.doi}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index, 'doi', e.target.value)}
                />

                <input
                  type="text"
                  value={row.issn}
                  onChange={(e) => handlePublicacionesC4TablaInputChange(index, 'issn', e.target.value)}
                />

              </label>
              <button onClick={() => deletePublicacionesC4Tabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPublicacionesC4Tabla}>Agregar Fila</button>
          </div>

        <div>
          <h3>d. Libros/Capítulos de libros:</h3>
          <h4>Detallar la siguiente información:</h4>
          <label>
          autores, títulos del libro y del artículo, año, lugar, DOI, ISSN
        </label>

        {LibrosTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.autores}
                  onChange={(e) => handleLibrosTablaInputChange(index, 'autores', e.target.value)}
                />

                <input
                  type="text"
                  value={row.titulolibro}
                  onChange={(e) => handleLibrosTablaInputChange(index,'titulolibro' , e.target.value)}
                />

                <input
                  type="text"
                  value={row.tituloarticulo}
                  onChange={(e) => handleLibrosTablaInputChange(index, 'tituloarticulo', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handleLibrosTablaInputChange(index, 'anio', e.target.value)}
                />

                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handleLibrosTablaInputChange(index, 'lugar', e.target.value)}
                />

                <input
                  type="text"
                  value={row.doi}
                  onChange={(e) => handleLibrosTablaInputChange(index, 'doi', e.target.value)}
                />

                <input
                  type="text"
                  value={row.issn}
                  onChange={(e) => handleLibrosTablaInputChange(index, 'issn', e.target.value)}
                />

              </label>
              <button onClick={() => deleteLibrosTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addLibrosTabla}>Agregar Fila</button>
          </div>

        <div>
          <h3>e- Pasantías en Universidades/Institutos o Centros de Investigación (por un periodo no menos a 3 meses) Formación de Recursos Humanos, dirección y/o participación en proyectos de investigación y premios</h3>
          <h4>Detallar la siguiente información:</h4>
          <label>
          <h4>pasantias</h4>
          lugar  horas de trabajo
        </label>

        {PasantiasTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handlePasantiasTablaInputChange(index, 'lugar', e.target.value)}
                />

                <input
                  type="text"
                  value={row.horas}
                  onChange={(e) => handlePasantiasTablaInputChange(index,'horas' , e.target.value)}
                />

              </label>
              <button onClick={() => deletePasantiasTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPasantiasTabla}>Agregar Fila</button>
          </div>

        <div>
          <h4>Formación de recursos humanos:</h4>
        <label>
          Descripción
        </label>

        {RHTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.descripcion}
                  onChange={(e) => handleRHTablaInputChange(index, 'descripcion', e.target.value)}
                />

              </label>
              <button onClick={() => deleteRHTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addRHTabla}>Agregar Fila</button>
          </div>

        <div>
          <h4>Proyectos de Investigación y Premios:</h4>
        <label>
          Título Participantes Lugar Año
        </label>

        {PremiosTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="text"
                  value={row.titulo}
                  onChange={(e) => handlePremiosTablaInputChange(index, 'titulo', e.target.value)}
                />
                
                <input
                  type="text"
                  value={row.participantes}
                  onChange={(e) => handlePremiosTablaInputChange(index, 'participantes', e.target.value)}
                />
                
                <input
                  type="text"
                  value={row.lugar}
                  onChange={(e) => handlePremiosTablaInputChange(index, 'lugar', e.target.value)}
                />
                
                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handlePremiosTablaInputChange(index, 'anio', e.target.value)}
                />

              </label>
              
              <button onClick={() => deletePremiosTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPremiosTabla}>Agregar Fila</button>
          </div>

        <div>
          <h3>f- Transferencias y Desarrollo de Tecnología</h3>
          <label>
          <h4>Detallar la siguiente información:</h4>
          Patente descripción año grado de participación Otros datos significativos.
        </label>

        {PatentesTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>

                <input
                  type="text"
                  value={row.descripcion}
                  onChange={(e) => handlePatentesTablaInputChange(index, 'descripcion', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handlePatentesTablaInputChange(index,'anio' , e.target.value)}
                />

                <input
                  type="text"
                  value={row.participacion}
                  onChange={(e) => handlePatentesTablaInputChange(index,'participacion' , e.target.value)}
                />

                <input
                  type="text"
                  value={row.otros}
                  onChange={(e) => handlePatentesTablaInputChange(index,'otros' , e.target.value)}
                />

              </label>
              <button onClick={() => deletePatentesTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addPatentesTabla}>Agregar Fila</button>
          </div>

          <div>
          <h3>G- Patentes:</h3>
          <h4>Patentes. Detallar la siguiente información:</h4>
          <label>
          <h4>Patente:</h4>
          Patente descripción año grado de participación Otros datos significativos.
        </label>

        {DesarrolloTabla.map((row, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>
                
                <input
                  type="text"
                  value={row.patente}
                  onChange={(e) => handleDesarrolloTablaInputChange(index, 'patente', e.target.value)}
                />

                <input
                  type="text"
                  value={row.descripcion}
                  onChange={(e) => handleDesarrolloTablaInputChange(index, 'descripcion', e.target.value)}
                />

                <input
                  type="text"
                  value={row.anio}
                  onChange={(e) => handleDesarrolloTablaInputChange(index,'anio' , e.target.value)}
                />

                <input
                  type="text"
                  value={row.participacion}
                  onChange={(e) => handleDesarrolloTablaInputChange(index,'participacion' , e.target.value)}
                />

                <input
                  type="text"
                  value={row.otros}
                  onChange={(e) => handleDesarrolloTablaInputChange(index,'otros' , e.target.value)}
                />

              </label>
              <button onClick={() => deleteDesarrolloTabla(index)}>X</button>
            </div>
            
          ))}
              <button onClick={addDesarrolloTabla}>Agregar Fila</button>
          </div>
          
          <div>
          <h3>ESPACIO RESERVADO PARA EL EVALUADOR:</h3>
          <input name="espacioReservado" />
          </div>


      </form>
      </div>
  );
}

// PREGUNTAS: COMO HACER TABLAS, COMO GENERAR PDF , fila 536 vale la pena cambiar la variable row? y en todas las otras tablas

export default App;
