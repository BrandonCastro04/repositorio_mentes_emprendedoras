import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProjectDescription from '@/views/ProjectDescription.vue';
import ObservacionesView from '@/views/Observaciones.vue';
import PlanPresupuestoView from '@/views/PlanPresupuesto.vue';
import EncargadosComponent from '@/views/Encargados.vue';
import EstructuraProyectoView from '@/views/EstructuraProyecto.vue';
import PoblacionBeneficiadaView from '@/views/PoblacionBeneficiada.vue';
import ObjetivosMetasView from '@/views/ObjetivosMetas.vue';
import UbicacionGeograficaView from '@/views/UbicacionGeografica.vue';
import Politicas from '@/views/Politicas.vue';
import MetodologiaView from '@/views/Metodologia.vue';
import RecursosDisciplinasView from '@/views/RecursosDisciplinas.vue';
import EvaluacionComponent from '@/views/Evaluacion.vue';
import AccionesProyectoView from '@/views/AccionesProyecto.vue';
import ObjetoGastoView from '@/views/ObjetoGasto.vue';
import RegimenBecarioView from '@/views/RegimenBecario.vue';
import CronogramaActividadesView from '@/views/CronogramaActividades.vue';
import ProjectSections from '@/views/ProjectSections.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  {path: '/secciones', name: 'Secciones', component: ProjectSections},
  { path: '/descripcion', name: 'Descripcion', component: ProjectDescription },
  { path: '/observaciones', name: 'Observaciones', component: ObservacionesView },
  { path: '/plan-presupuesto', name: 'PlanPresupuesto', component: PlanPresupuestoView },
  { path: '/encargados', name: 'Encargados', component: EncargadosComponent },
  { path: '/estructura', name: 'EstructuraProyecto', component: EstructuraProyectoView },
  { path: '/poblacion-beneficiada', name: 'PoblacionBeneficiada', component: PoblacionBeneficiadaView },
  { path: '/objetivos-metas', name: 'ObjetivosMetas', component: ObjetivosMetasView },
  { path: '/ubicacion-geografica', name: 'UbicacionGeografica', component: UbicacionGeograficaView },
  { path: '/politicas', name: 'Politicas', component: Politicas },
  { path: '/metodologia', name: 'Metodologia', component: MetodologiaView },
  { path: '/recursos-disciplinas', name: 'RecursosDisciplinas', component: RecursosDisciplinasView },
  { path: '/evaluacion', name: 'Evaluacion', component: EvaluacionComponent },
  { path: '/acciones-proyecto', name: 'AccionesProyecto', component: AccionesProyectoView },
  { path: '/objeto-gasto', name: 'ObjetoGasto', component: ObjetoGastoView },
  { path: '/regimen-becario', name: 'RegimenBecario', component: RegimenBecarioView },
  { path: '/cronograma-actividades', name: 'CronogramaActividades', component: CronogramaActividadesView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


