import { Button } from "@repo/ui/button";

export default function Home() {
	return (
		<main className="w-full h-full">
			<div className="w-full h-full flex justify-center items-center">
				<div className="bg-white p-10">
					<Button variant={"default"}>default</Button>
					<Button variant={"destructive"}>destructive</Button>{" "}
					<Button variant={"ghost"}>ghost</Button>{" "}
					<Button variant={"link"}>link</Button>{" "}
					<Button variant={"outline"}>outline</Button>{" "}
					<Button variant={"secondary"}>secondary</Button>
				</div>
			</div>
		</main>
	);
}
