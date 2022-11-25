import { useEffect } from "react";
import { Label, TextInput, FileInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addUser } from "../services/user/ApiRequestUser";

import { useAuth } from "../context/hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { useLoading } from "../context/hooks/useLoading";
import { useModal } from "../context/hooks/useModal";

import $ from "jquery";


yup.setLocale({
  mixed: {
    required: 'Campo es requerido',
  }
});

const schema = yup
  .object()
  .shape({
    nombre: yup.string().required(),
    apellido: yup.string().required(),
    rut: yup
      .string()
      .matches(/^(\d{7,8}-[\dkK])$/g,'Formato del rut: 1234567-8')
      .required(),
    correo: yup.string().email('Formato de email: hola@turismoreal.cl').required(),
    telefono: yup
      .string()
      .matches(/^[92]{1}\d{8}$/g,'Formato de teléfono: (+56) 912345678')
      .required(),
    password : yup.string().min(4,'Mínimo 4 caracteres').max(8,'Máximo 8 caracteres').required(),
    password2: yup.string().oneOf([yup.ref('password'),null],'No coinciden las contraseñas').required()
  })
  .required();

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema) });

  const { isLogged, user } = useAuth();
  const { setIsLoading } = useLoading();
  const { setShowModal, setParams, modalTypes, setModalType } = useModal();


  const navigate = useNavigate();

  useEffect(() => { 
    if (isLogged()) {
      console.log("Está logueado")
      navigate('/departamentos');
    }
    else console.info('No se ha logueado');
  }, [user])

  const onSubmit = (data) => {
    setIsLoading(true);

    console.log(data)
    data.telefono = `+56${data.telefono}`;
    data.id_rol = 3;
    
    var formData = new FormData();
    if(data.imagen[0])
      formData.append(data.imagen[0].name, data.imagen[0]);
    delete data.imagen;
    
    formData.append("content", JSON.stringify(data));

    console.log(formData.values);

    Promise.all([
      addUser(formData)
    ]).then(([response]) => {
      console.log(response);
      if (response.msg) {
        setModalType(modalTypes.info);
        setParams({
          success:false,
          title:'Error!',
          message: response.msg,
          redirect_to: false,
        });
        setShowModal(true);
      } else {
        setModalType(modalTypes.alert);
        setParams({
          message: 'Usuario creado con éxito, ten en cuenta que puedes iniciar sesión con tu rut o correo electrónico',
          redirect_to: `/login`,
          continue_msg: 'Iniciar Sesión',
          success: true,
        });
        setShowModal(true);
      }
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-700 dark:text-white flex items-center justify-center py-10 rounded-xl drop-shadow-xl">
          <div className="w-full px-10 space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-purple-500 dark:text-yellow-300">
                  Regístrate
                </span>{" "}
                para obtener nuestros servicios!!
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-center gap-4">
                <div className="md:flex md:gap-4 ">
                  <div className="w-full mb-2">
                    <div className="mb-2 block">
                      <Label htmlFor="nombre" value="Nombre" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="nombre"
                      type="text"
                      name="nombre"
                      {...register("nombre")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                      {errors.nombre?.message}
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="apellido" value="Apellidos" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="apellido"
                      type="text"
                      name="apellido"
                      {...register("apellido")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                      {errors.apellido?.message}
                    </p>
                  </div>
                </div>

                <div id="fileUpload">
                  <div className="mb-2 block">
                    <Label htmlFor="imagen" value="Imagen de perfil" />
                  </div>
                  <FileInput
                    id="imagen"
                    helperText="¡Permítenos conocerte! Si lo desea puedes subir una imagen de perfil."
                    {...register("imagen")}
                  />
                </div>

                <div className="md:flex md:gap-4 ">
                  <div className="w-full mb-2 ">
                    <div className="mb-2 block">
                      <Label htmlFor="telefono" value="Teléfono" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="telefono"
                      type="text"
                      placeholder="912345678"
                      addon="(+56)"
                      {...register("telefono")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full lining-nums">
                      {errors.telefono?.message}
                    </p>
                  </div>
                  
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="direccion" value="Domicilio" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="direccion"
                      type="text"
                      name="direccion"
                      {...register("direccion")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                      {errors.direccion?.message}
                    </p>
                  </div>

                </div>

                <div className="md:flex md:gap-4 ">
                  <div className="w-full mb-2 ">
                    <div className="mb-2 block">
                      <Label htmlFor="rut" value="Rut" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="rut"
                      type="text"
                      placeholder="1234567-8"
                      {...register("rut")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full lining-nums">
                      {errors.rut?.message}
                    </p>
                  </div>
                  
                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="correo" value="Correo" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="correo"
                      type="text"
                      name="correo"
                      placeholder="hola@turismoreal.cl"
                      {...register("correo")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                      {errors.correo?.message}
                    </p>
                  </div>

                </div>

                <div className="md:flex md:gap-4 ">
                  <div className="w-full mb-2 ">
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Contraseña" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="password"
                      type="password"
                      {...register("password")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                      {errors.password?.message}
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="mb-2 block">
                      <Label htmlFor="password2" value="Confirmar Contraseña" />
                      <span className="text-red-500 text-2xl h-full align-middle">
                        *
                      </span>
                    </div>
                    <TextInput
                      id="password2"
                      type="password"
                      {...register("password2")}
                    />
                    <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                      {errors.password2?.message}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="md:w-1/2 w-full block mx-auto rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 dark:bg-yellow-300 dark:hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-300 focus:ring-offset-2"
                >
                  Registrarme
                </button>

              </div>

              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
