import { createFileRoute, Link} from "@tanstack/react-router";
import { MyInput } from '../../components/ui/my-input';
import { Button } from '../../components/ui/my-button';
import { useState, FormEvent, ChangeEvent } from "react";


export const Route = createFileRoute("/auth/register")({
	component: Register,
});


type RegisterData = {
	password: string;
	email: string;
	full_name: string;
	nick_name: string;
}

export function Register() {

	const API_URL = import.meta.env.VITE_API_URL;
	const [formData, setFormData] = useState<RegisterData>({
		email: "",
		password: "",
		full_name: "",
		nick_name: "",
	})
	const [error, setError] = useState<string>();
	const [loading, setLoading] = useState<boolean>(false);
	
	const usernameCandidate = localStorage.getItem(
		"candidateUsername"
	) as string;


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}))

	}

	const handleSubmit = async (e: FormEvent) => {

		e.preventDefault()

		try {

			setLoading(true)
			const response = await fetch(`${API_URL}/api/users/registration`, {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({...formData, username: usernameCandidate})
			})

			if (!response.ok) {
				const error = await response.json();
				setError(error.message)
			}
			
			setLoading(false);

		} catch {
			alert("Something Wrong!")
		}
	}


	
	if (loading) {
		return <div>Loading Data . . .</div>
	}

	if (error) {
		return <div>Error Fetching Data</div>
	}

	return (
		<section id="register" className="flex items-center justify-center">
			<div className="flex flex-col gap-4 p-8 py-24  font-main w-[600px]">
				<div>
					<span className="text-purple-600">Portofolia.id</span>
					<h1 className="text-xl font-extrabold">
						Ini adalah langkah awal!
					</h1>
					<p className="text-sm">
						Klaim{" "}
						<span className="underline">{usernameCandidate}</span>{" "}
						segera!
					</p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4">
							<MyInput id="username" label="Username" type="text" name="username" disabled={true} value={usernameCandidate} />
							<MyInput id="email" label="Email" value={formData.email}  handle_change={handleChange} name="email"  type="email" />
							<MyInput id="password" label="Password" value={formData.password}  handle_change={handleChange} name="password" type="password" />
							<MyInput id="full_name" label="Nama Lengkap" value={formData.full_name}  handle_change={handleChange} name="full_name" type="text" />
							<MyInput id="nick_name" label="Nama Panggilan" value={formData.nick_name} handle_change={handleChange}  name="nick_name" type="text" />
						</div>
						<div className='flex flex-col gap-2'>
							 <span>Sudah punya akun? <Link to='/auth/login' className='text-purple-600 hover:underline decoration-dashed'>Login</Link></span>
							<div>
								 <Button title='Masuk' customGradient='bg-gradient-to-tl from-purple-900 to-purple-600' textColor='text-white' textWeight='font-semibold'></Button>
							</div>
						</div>
					</div>
				</form>

				<div></div>
			</div>
		</section>
	);
}
