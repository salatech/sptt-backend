const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const transcriptionService = require("../services/transcriptionService");

const packageDefinition = protoLoader.loadSync(
	"./proto/speech.proto",
	{}
);
const proto = grpc.loadPackageDefinition(packageDefinition);

const startGrpcServer = () => {
	const server = new grpc.Server();

	server.addService(proto.SpeechService.service, {
		StreamAudio: async (call) => {
			// Process incoming audio data and transcribe
			const transcriptionText = await transcribeAudio(call.request.audioData);
			await transcriptionService.createTranscription(transcriptionText);
			call.write({ transcription: transcriptionText });
		},
	});

	server.bindAsync(
		"0.0.0.0:50051",
		grpc.ServerCredentials.createInsecure(),
		() => {
			server.start();
			console.log("gRPC server started");
		}
	);
};

module.exports = startGrpcServer;
