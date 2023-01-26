<template>
    <div class="card mb-4">
        <div class="card-header pb-0">
            <h6>Reporte de deudas de clientes por mes</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center justify-content-center mb-0">
                   <!--<thead>
                        <tr>
                            <th v-bind:key="iterador + 1" v-for="columna in columnas" class="text-uppercase
                                text-secondary
                                text-xxs 
                                font-weight-bolder 
                                opacity-7
                                ">
                                {{ columna }}
                            </th>
                        </tr>
                    </thead>-->
                    <tbody>

                        <tr v-for:="fila in filas">
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="../../assets/img/small-logos/logo-jira.svg"
                                            class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-sm">{{ fila.DocAsociado_id }}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-sm font-weight-bold mb-0">{{ fila.ahorrado }}</p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "table-reports",
    data() {
        return {
            iterador: 1,
            columnas: [
                'Nombre del cliente',
                'Valor de deuda',
                'Estado de pago'
            ],
            filas: [
                {
                    nombre: 'Spotify',
                    valor: '$2,500',
                    estado: 'En proceso'
                },
                {
                    nombre: 'Spotify',
                    valor: '$2,500',
                    estado: 'Finalizado'
                },
                {
                    nombre: 'Spotify',
                    valor: '$2,500',
                    estado: 'En proceso'
                }
            ]
        }
    },
    props: {
        _columnas: [],
        _filas: []
    },
    mounted() {
        this.$data.columnas = this.$props._columnas
        this.$data.filas = this.$props._filas
        console.log(this.$data.columnas);
        console.log(this.$data.filas);
    }
}
</script>
